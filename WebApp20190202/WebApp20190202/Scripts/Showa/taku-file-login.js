var takuFile;
(function (takuFile) {
    var Login = /** @class */ (function () {
        function Login() {
            var _this = this;
            this.htmlStructure = '<div class = "row">' +
                '<div class = "col-md-12">' +
                '<table class="table table-hover">' +
                '<thead>' +
                '<tr>' +
                '<th>#</th>' +
                '<th> 項目 </th>' +
                '<th> 値 </th>' +
                '</tr>' +
                '</thead>' +
                '<tbody >' +
                '<tr>' +
                '<td>1 </td>' +
                '<td> email address </td>' +
                '<td> password </td>' +
                '</tr>' +
                '<tr>' +
                '<td>2 </td>' +
                '<td><input id="login-input-01" type="email" /></td>' +
                '<td><input id="login-input-02" type="text" /></td>' +
                '</tr>' +
                '<tr>' +
                '<td>3 </td>' +
                '<td> </td>' +
                '<td><button id="login-button-01">login</button></td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '</div>' +
                '</div>';
            this.initModule = function ($mainId) {
                _this.loadView($mainId);
                _this.bindCrickHandle($mainId);
            };
            this.loadView = function ($mainId) {
                $mainId.html(_this.htmlStructure);
            };
            this.bindCrickHandle = function ($bodyContent) {
                console.log("start login bindCrickHandle");
                $bodyContent.find('#login-button-01').bind('click', function () {
                    console.log("click login-button-01");
                    var email = $bodyContent.find('#login-input-01').val();
                    var password = $bodyContent.find('#login-input-02').val() + ".txt";
                    email == null ? "" : email;
                    password == null ? "" : password;
                    var url01 = "/api/values/";
                    if (email.length == 0 || password.length == 0) {
                        alert("invalid input");
                        return;
                    }
                    $.ajax({
                        type: "POST",
                        url: url01,
                        data: { actionType: "login_check", emailAddress: email, groupId: password }
                        //dataType: "text"
                    }).done(function (data, textStatus, jqXHR) {
                        var result = data.actionResult == null ? "" : data.actionResult;
                        if (result == "checkOK") {
                            alert("permitted");
                        }
                        else {
                            alert("response is " + result + " status " + textStatus);
                        }
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        alert("error occured " + errorThrown);
                    });
                });
            };
        }
        return Login;
    }());
    takuFile.login = new Login();
})(takuFile || (takuFile = {}));
//# sourceMappingURL=taku-file-login.js.map