//Script to generate distribution and publish to the dist repo
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

async function aExec(script) {
    return await new Promise((res, rej) => {
        exec(script, (err, stdout, stderr) => {
            if (err)
                rej(err);
            console.log(stdout ? stdout : stderr);
            res(stdout || stderr);
        });
    });
}

(async () => {
    try {
        //generate babel output
        await aExec("npm run build-babel");

        //add in package.json template
        let template = await new Promise((res, rej) => {
            fs.readFile(path.join(__dirname, 'package.json.template'), 'utf-8', (err, file) => {
                if (err)
                    rej(err);
                res(file);
            });
        });
        template = template.replace("$VERSION", "0.0.1")

        //create new package.json
        await new Promise((res, rej) => {
            fs.writeFile("dist/package.json", template, (err) => {
                if (err)
                    rej(err);
                console.log("Moved template package.json\n");
                res(true);
            })
        });

        //generate lock file
        await aExec("cd dist && npm i");
        console.log("Successfully built distribution!\n");

    } catch (err) {
        console.error(err);
    }
})();