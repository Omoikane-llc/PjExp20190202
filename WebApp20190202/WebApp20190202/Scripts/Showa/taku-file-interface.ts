namespace takuFile{
    export interface HtmlElement {
        htmlStructure: string;
        initModule: Function;
    }

    export interface JsonCarrier {
        actionType: string;
        groupId: string;
        emailAddress: string;
        uploadfiles: string;
        actionResult: string;
        errorMessage: string;
    }
}