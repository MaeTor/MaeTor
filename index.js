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

      Object.entries(identifierToUpdate).forEach(([key, value]) => {
        updateIdentifier(key, value);
    });

    return readmeRow.join('\n');
}

const moodByDay = {
    1: 'hate',
    2: 'wickedness',
    3: 'pleasure',
    4: 'wickedness',
    5: 'cruelty',
    6: 'horror',
    7: 'love',
};

function getRicoSigning() {
    const mood = moodByDay[today.getDay() + 1];
    return `🤖 This README.md is updated with ${mood}, by Rico !`;
}

function getTodayDate() {
    return today.toDateString();
}


