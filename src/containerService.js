const { exec } = require("child_process");

module.exports.stopContainer = (container_id) => {
  const command = `podman stop \"${container_id}\"`;
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error stoping the container: ${error}`);
        reject(false);
      }
      resolve(true);
      if (stderr) {
        console.error(`Script error:\n${stderr}`);
        reject(false);
      }
    });
  });
};
module.exports.removeContainer = (container_id) => {
  const command = `podman rm \"${container_id}\"`;
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error removing the container: ${error}`);
        reject(false);
      }
      resolve(true);
      if (stderr) {
        console.error(`Script error:\n${stderr}`);
        reject(false);
      }
    });
  });
};

module.exports.getLogsContainer = (container_id) => {
  const command= `podman logs \"${container_id}\"`;
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing script: ${error}`);
        reject(error);
      }
      resolve(stdout);
      if (stderr) {
        console.error(`Script error:\n${stderr}`);
        reject(stderr);
      }
    });
  });
};

module.exports.runContainer = (args) => {
  let code = args.code.replace(/"/g, '\\"');
  let lang = args.lang;
  let containerImage = args.containerImage;
  const command = `podman run -d ${containerImage} ${lang} \"${code}\"`;
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing script: ${error}`);
        reject(error);
      }
      let container_id = stdout.replace(/\n/g, "");
      resolve(container_id);
      if (stderr) {
        console.error(`Script error:\n${stderr}`);
        reject(stderr);
      }
    });
  });
};
