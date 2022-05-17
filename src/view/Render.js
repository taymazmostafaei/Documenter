const fs = require('fs');

const Render = (data, options) => {

    try {
        RenderStart(data).then(function (finalDisplay) {
            fs.writeFileSync(options.save + 'index.html', finalDisplay)
        })
        return true
    } catch (error) {
        return false
    }

}

async function RenderStart(data) {
    var display = '';
    var htmlPagePart1 = fs.readFileSync(__dirname + 'demo/part1.html','utf-8');
    var htmlPagePart2 = fs.readFileSync(__dirname + 'demo/part2.html','utf-8');

    await data.forEach(element => {
        display = +component(element[0], element[1]);
    });

    var finalDisplay = htmlPagePart1 + display + htmlPagePart2;

    return finalDisplay;
}

const component = (title, content) => {
    return `<div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne">
            ${title}
        </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne">
        <div class="accordion-body">
            ${content}
        </div>
    </div>
</div>`
}

module.exports = Render