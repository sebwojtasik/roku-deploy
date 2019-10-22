import { RokuDeploy } from './RokuDeploy';

//export everything from the RokuDeploy file
export * from './RokuDeploy';
export * from './util';

//create a new static instance of RokuDeploy, and export those functions for backwards compatibility
let rokuDeploy = new RokuDeploy();

let createPackage = RokuDeploy.prototype.createPackage.bind(rokuDeploy);
let deleteInstalledChannel = RokuDeploy.prototype.deleteInstalledChannel.bind(rokuDeploy);
let deploy = RokuDeploy.prototype.deploy.bind(rokuDeploy);
let deployAndSignPackage = RokuDeploy.prototype.deployAndSignPackage.bind(rokuDeploy);
let endsWithSlash = RokuDeploy.prototype.endsWithSlash.bind(rokuDeploy);
let getFilePaths = RokuDeploy.prototype.getFilePaths.bind(rokuDeploy);
let getOptions = RokuDeploy.prototype.getOptions.bind(rokuDeploy);
let getOutputPkgFilePath = RokuDeploy.prototype.getOutputPkgFilePath.bind(rokuDeploy);
let getOutputZipFilePath = RokuDeploy.prototype.getOutputZipFilePath.bind(rokuDeploy);
let normalizeFilesOption = RokuDeploy.prototype.normalizeFilesArray.bind(rokuDeploy);
let normalizeRootDir = RokuDeploy.prototype.normalizeRootDir.bind(rokuDeploy);
let parseManifest = RokuDeploy.prototype.parseManifest.bind(rokuDeploy);
let prepublishToStaging = RokuDeploy.prototype.prepublishToStaging.bind(rokuDeploy);
let pressHomeButton = RokuDeploy.prototype.pressHomeButton.bind(rokuDeploy);
let publish = RokuDeploy.prototype.publish.bind(rokuDeploy);
let rekeyDevice = RokuDeploy.prototype.rekeyDevice.bind(rokuDeploy);
let retrieveSignedPackage = RokuDeploy.prototype.retrieveSignedPackage.bind(rokuDeploy);
let signExistingPackage = RokuDeploy.prototype.signExistingPackage.bind(rokuDeploy);
let zipFolder = RokuDeploy.prototype.zipFolder.bind(rokuDeploy);
let zipPackage = RokuDeploy.prototype.zipPackage.bind(rokuDeploy);

export {
    createPackage,
    deleteInstalledChannel,
    deploy,
    deployAndSignPackage,
    endsWithSlash,
    getFilePaths,
    getOptions,
    getOutputPkgFilePath,
    getOutputZipFilePath,
    normalizeFilesOption,
    normalizeRootDir,
    parseManifest,
    prepublishToStaging,
    pressHomeButton,
    publish,
    rekeyDevice,
    retrieveSignedPackage,
    signExistingPackage,
    zipFolder,
    zipPackage
};
