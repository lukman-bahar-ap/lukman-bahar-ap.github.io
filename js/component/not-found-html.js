class NotFoundTemplate {

    static showPageNotFound () {

        return `
                <div class="row">
                    <div id="index-banner" class="page-banner">
                    <div class="section no-pad-bot">
                        <div class="container">
                        <h1 class="header center">404</h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row center">
                        <h1 class="header center">Page Not Found</h1>
                    </div>
                </div>`;
            
    }
}
export default NotFoundTemplate;