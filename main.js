  //  التحقق من تسجيل الدخول
    // if (localStorage.getItem("isLoggedIn") !== "true") {
    //   alert("يرجى تسجيل الدخول للوصول إلى هذه الصفحة.");
    //   window.location.href = "login.html"; // إعادة التوجيه إلى صفحة تسجيل الدخول
    // }




    // const currentUser = localStorage.getItem("currentUser");
    // if (currentUser) {
    //     document.getElementById("username").textContent = currentUser;
    // }



    document.getElementById("logoutButton").addEventListener("click", function () {
        // إزالة حالة تسجيل الدخول
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        alert("تم تسجيل الخروج بنجاح.");
        window.location.href = "login.html"; // إعادة التوجيه إلى صفحة تسجيل الدخول
    });
