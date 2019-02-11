var takuFile;
(function (takuFile) {
    var Home = /** @class */ (function () {
        function Home() {
            var _this = this;
            this.htmlStructure = '<div class = "row">' +
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
            this.initModule = function ($mainId) {
                //$mainId.html(this.htmlStructure);
            };
            this.loadView = function ($mainId) {
                $mainId.html(_this.htmlStructure);
            };
        }
        return Home;
    }());
    takuFile.home = new Home();
})(takuFile || (takuFile = {}));
//# sourceMappingURL=taku-file-home.js.map