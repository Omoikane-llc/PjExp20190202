namespace takuFile {
    class Shell implements HtmlElement {
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
                            '<td> </td>' + 
                            '<td> </td>' + 
                        '</tr>' + 
                    '</tbody>' + 
                '</table>' + 
            '</div>' + 
        '</div>';
        initModule = ($mainId: JQuery) => {
            login.initModule($mainId);
        }
    }
    export var shell = new Shell();
}