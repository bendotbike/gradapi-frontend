const API_PATH = "https://apps.ben.directory/gradapi/api/v1/";

// Replace the page background with a randomly generated linear gradient from the API
function generateLinearGradient() {
    $.get(API_PATH + "generate_linear_gradient", function(data, status) {
        console.log("Response: " + JSON.stringify(data) + ", (status=" + status + ")");

        var jsonData = data;

        var css = "linear-gradient(" + jsonData.angle;

        for (var i = 0; i < jsonData.colors.length; i++) {
            css += ", " + jsonData.colors[i];
        }

        css += ")";
        
        console.log("Generated CSS: " + css);

        applyCSS(css);
    });
}

// Replace the page background with a randomly generated transparent linear gradient from the API
function generateTransparentLinearGradient() {
    $.get(API_PATH + "generate_transparent_linear_gradient", function(data, status) {
        console.log("Response: " + JSON.stringify(data) + ", (status=" + status + ")");

        var jsonData = data;

        var css = "linear-gradient(" + jsonData.angle;

        for (var i = 0; i < jsonData.colors.length; i++) {
            css += ", " + jsonData.colors[i];
        }

        css += ")";

        console.log("Generated CSS: " + css);

        applyCSS(css);
    });
}

// Replace the page background with a randomly generated radial gradient from the API
function generateRadialGradient() {
    $.get(API_PATH + "generate_radial_gradient", function(data, status) {
        console.log("Response: " + JSON.stringify(data) + ", (status=" + status + ")");

        var jsonData = data;

        var css = "radial-gradient(" + jsonData.shape;

        for (var i = 0; i < jsonData.colors.length; i++) {
            css += ", " + jsonData.colors[i];
        }

        css += ")";

        console.log("Generated CSS: " + css);

        applyCSS(css);
    });
}

// Applys gradient CSS to page background
function applyCSS(gradientCss) {
    document.body.style = "background-image: " + gradientCss + ";";
}

// Reloads the page
function reload() {
    location.reload();
}