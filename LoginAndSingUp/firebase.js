// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCYJqwfvoW90tITSh7O6WNa00uh2_wxKT4",
  authDomain: "khong--moive.firebaseapp.com",
  projectId: "khong--moive",
  storageBucket: "khong--moive.appspot.com",
  messagingSenderId: "911580490084",
  appId: "1:911580490084:web:YOUR_APP_ID" // Replace if needed
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Form
const loginForm = document.querySelector(".login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Login successful!");
        window.location.href = "../index.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
}

// Sign Up Form
const signupForm = document.querySelector(".signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = signupForm.querySelector('input[placeholder="Full Name"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[placeholder="Password"]').value;
    const confirmPassword = signupForm.querySelector('input[placeholder="Confirm Password"]').value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Optional: update display name
        return userCredential.user.updateProfile({ displayName: fullName });
      })
      .then(() => {
        alert("Sign up successful!");
        window.location.href = "./login.html";
      })
      .catch((error) => {
        alert("Sign up failed: " + error.message);
      });
  });
}
