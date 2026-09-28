function createMasterList () {
    const masterList = []

    function addProjectToMaster(projectName) {
        masterList.push(projectName);
    }

    function getMasterList() {
        return masterList;
    }

    return {masterList, addProjectToMaster, getMasterList}

}

export {createMasterList}