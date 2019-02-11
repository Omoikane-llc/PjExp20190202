namespace takuFile {
    class Login implements HtmlElement {
        htmlStructure: string =
            '<div class = "row">' +
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
        initModule = ($mainId: JQuery) => {
            this.loadView($mainId);
            this.bindCrickHandle($mainId);
        }

        loadView = ($mainId: JQuery) => {
            $mainId.html(this.htmlStructure);
        }

        private bindCrickHandle = ($bodyContent: JQuery): void => {
            console.log("start login bindCrickHandle");
            $bodyContent.find('#login-button-01').bind('click', () => {
                console.log("click login-button-01");

                let email: string = $bodyContent.find('#login-input-01').val();
                let password: string = $bodyContent.find('#login-input-02').val() + ".txt";

                email == null ? "" : email;
                password == null ? "" : password;

                let url01: string = "/api/values/";

                if (email.length == 0 || password.length == 0) {
                    alert("invalid input");
                    return;
                }

                $.ajax({
                    type: "POST",
                    url: url01,
                    data: { actionType: "login_check", emailAddress: email, groupId: password }
                    //dataType: "text"
                }).done((data: takuFile.JsonCarrier, textStatus: string, jqXHR: JQueryXHR) => {

                    let result = data.actionResult == null ? "" : data.actionResult;

                    if (result == "checkOK") {
                        alert("permitted");
                    } else {
                        alert("response is " + result + " status " + textStatus);
                    }

                }).fail((jqXHR: JQueryXHR, textStatus: string, errorThrown) => {
                    alert("error occured " + errorThrown);
                });


            });
        }
    }
    export var login = new Login();
}