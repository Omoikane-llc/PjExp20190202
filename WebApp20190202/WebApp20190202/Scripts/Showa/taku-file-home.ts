namespace takuFile {
    class Home implements HtmlElement {
        htmlStructure: string =
            '<div class = "row">' +
                '<div class = "col-md-12">' +
                    '<table class="table table-hover">' +
                        '<thead>' +
                            '<tr>' +
                                '<th>#</th>' +
                                '<th> ファイル名 </th>' +
                                '<th> ダウンロード </th>' +
                            '</tr>' +
                        '</thead>' +
                        '<tbody id="home-tbody-01">' +
                            '<tr>' +
                                '<td>1 </td>' +
                                '<td id="home-td-01"> file name </td>' +
                                '<td><button id="home-button-01">download</button></td>' +
                            '</tr>' +
                        '</tbody>' +
                    '</table>' +
                '</div>' +
            '</div>';
        initModule = ($mainId: JQuery) => {
            //$mainId.html(this.htmlStructure);
        }

        loadView = ($mainId: JQuery) => {
            $mainId.html(this.htmlStructure);
        }
    }
    export var home = new Home();
}