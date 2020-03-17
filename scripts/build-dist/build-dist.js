//Script to generate distribution and publish to the dist repo
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const properties = low(new FileSync(path.join(__dirname, 'properties.json'))    );

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
        //get version and increment version
        let version = properties.get("npm_version").value().toString();
        let vstr = version.padStart(3, "0");
        let versionString = vstr.split("").reduce((acc, val, i) => {
            return acc + "." + val;
        });
        template = template.replace("$VERSION", versionString)
        properties.set("npm_version", Number(version) + 1).write();

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