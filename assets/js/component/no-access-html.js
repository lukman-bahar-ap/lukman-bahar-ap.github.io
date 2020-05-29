class NoAccessTemplate {
   
        static showNoAccessPage () {

            return  `<div class="row">
                    <div id="index-banner" class="page-banner">
                        <div class="section no-pad-bot">
                            <div class="container">
                                <h1 class="header center">Something wrong</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row center">
                        <h1 class="header center">Ups, can't access this page</h1>
                    </div>
                </div>`;

        }
}
export default NoAccessTemplate;