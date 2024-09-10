const { promises: fs } = require('fs');
const readme = require('./readme');

const msInOneDay = 1000 * 60 * 60 * 24;

const today = new Date();

function generateNewREADME() {

    const readmeRow = readme.split('\n');
    // updateIdentifier remplace un identifiant dans readmeRow par un texte donné
    function updateIdentifier(identifier, replaceText) {
        const identifierIndex = findIdentifierIndex(readmeRow, identifier);
        if (!readmeRow[identifierIndex]) return;
        readmeRow[identifierIndex] = readmeRow[identifierIndex].replace(
            `<#${identifier}>`,
            replaceText
        );
    }

    const identifierToUpdate = {
        day_before_new_years: getDBNWSentence(),
        today_date: getTodayDate(),
        rico_signing: getRicoSigning(),
      };


}
