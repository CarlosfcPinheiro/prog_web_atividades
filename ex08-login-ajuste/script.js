const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");
const inputEmail = document.getElementById("inputEmail");
const btSignUp = document.getElementById("btSignUp");
const btLogin = document.getElementById("btLogin");
const btLogout = document.getElementById("btLogout");
const h1IndexTitle = document.getElementById("h1IndexTitle");

const baseURL = "https://parseapi.back4app.com";
const usersURL = `${baseURL}/users`;
const loginURL = `${baseURL}/login`;
const logoutURL = `${baseURL}/logout`;
const headers = {
  "X-Parse-Application-Id": "hKRFKn16AvVRPzFPBZ18dr9pZhHRcPV9RvaTnKua",
  "X-Parse-REST-API-Key": "psedXzNOrkTrkM5kBXVD6deViybeJTBCZphij9xR",
};
const headersRevSession = {
  ...headers,
  "X-Parse-Revocable-Session": "1",
};
const headersJson = {
  ...headersRevSession,
  "Content-Type": "application/json",
};

const handleBtSignUpClick = async () => {
  const username = inputUsername.value.trim();
  if (!username) {
    alert("Preencha o nome do usuário!");
    inputUsername.focus();
    return;
  }

  const password = inputPassword.value.trim();
  if (!password) {
    alert("Preencha a senha!");
    inputPassword.focus();
    return;
  }

  const email = inputEmail.value.trim();
  if (!email) {
    alert("Preencha o e-mail!");
    inputEmail.focus();
    return;
  }

  const response = await fetch(usersURL, {
    method: "POST",
    headers: headersJson,
    body: JSON.stringify({ username, password, email }),
  });
  const data = await response.json();
  console.log("user:", data);
};

const handleBtLoginClick = async () => {
  const username = inputUsername.value.trim();
  if (!username) {
    alert("Preencha o nome do usuário!");
    inputUsername.focus();
    return;
  }

  const password = inputPassword.value.trim();
  if (!password) {
    alert("Preencha a senha!");
    inputPassword.focus();
    return;
  }

  const response = await fetch(loginURL, {
    method: "POST",
    headers: headersRevSession,
    body: new URLSearchParams({
      username,
      password,
    }),
  });
  console.log("response", response);
  const data = await response.json();
  if (!response.ok) {
    alert(`Code: ${data.code} - error: ${data.error}`);
    return;
  }
  console.log("data:", data);
  localStorage.user = JSON.stringify(data);
  const searchParams = new URLSearchParams(location.search);
  if (searchParams.has("url")) {
    location.replace(searchParams.get("url"));
  } else {
    history.back();
  }
};

const handleBtLogoutClick = async () => {
  const userJson = localStorage.user;
  if (userJson) {
    const user = JSON.parse(userJson);
    const response = await fetch(logoutURL, {
      method: "POST",
      headers: {
        ...headers,
        "X-Parse-Session-Token": user.sessionToken,
      },
    });
    console.log("response", response);
    const data = await response.json();
    if (!response.ok) {
      alert(`Code: ${data.code} - error: ${data.error}`);
      return;
    }
    console.log("data:", data);
    delete localStorage.user;
    // location.assign("/ex08");
    history.back();
  }
};

// ================= Events ==========================

if (btSignUp) {
  btSignUp.onclick = handleBtSignUpClick;
}

if (btLogin) {
  btLogin.onclick = handleBtLoginClick;
}

if (btLogout) {
  btLogout.onclick = handleBtLogoutClick;
}

// Current user session function
const checkCurrentUser = async (sessionToken) => {
  const rawData = await fetch(`${usersURL}/me`,
    {
      method: "GET",
      headers: {
        "X-Parse-Application-Id": "hKRFKn16AvVRPzFPBZ18dr9pZhHRcPV9RvaTnKua",
        "X-Parse-REST-API-Key": "psedXzNOrkTrkM5kBXVD6deViybeJTBCZphij9xR",
        "X-Parse-Session-Token": sessionToken
      }
    }
  ).then((response) => {
    const jsonResponse = response.json();
    return jsonResponse;
    
  }).catch((err) => {
    return console.log("ERROR: " + err);
  })
}

if (h1IndexTitle) {
  window.onload = async () => {
    const userJson = localStorage.user;
    const user = JSON.parse(userJson);
    // getting username
    const sessionToken = user.sessionToken;

    try{
      const jsonResponse = await checkCurrentUser(sessionToken);

      if (userJson) {
        h1IndexTitle.innerHTML = `Back4App User (${user.username})`;
        if (btLogout) {
          btLogout.disabled = false;
        }
      }

    }catch(err){
      console.log(err);
      window.location.replace('./login.html');
    }
  }
}
