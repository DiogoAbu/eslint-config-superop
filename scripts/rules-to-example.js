const fs = require('fs');
const path = require('path');
const eslint = require('../index');

// Get rules
const ruleSettings = prepareRules(eslint.rules);

ruleSettings.sort();

// Map rules to comment text
let text = ruleSettings.reduce((prev, curr) => handleRuleText(prev, curr), '## General rules\n\n');

// Get extra rules
eslint.overrides.map((e) => {
  if (e.rules) {
    const rules = prepareRules(e.rules);

    rules.sort();

    text += rules.reduce(
      (prev, curr) => handleRuleText(prev, curr),
      `## Rules for:${e.files.reduce((p, c) => `${p} \`${c}\``, '')}\n\n`,
    );
  }
});

fs.writeFileSync(path.join(__dirname, '../example.md'), text, 'utf8');

function prepareRules(rules) {
  return Object.entries(rules).reduce((prev, [key, setting]) => {
    return prev.concat(`**${key}**: ${getDescriptiveSetting(setting)}`);
  }, []);
}

function getDescriptiveSetting(setting) {
  let value = setting;
  if (Array.isArray(setting)) {
    value = setting[0];
  }

  if (value === 'warn' || value === 1) {
    return 'warning';
  }
  if (value === 'error' || value === 2) {
    return 'error';
  }

  return 'disabled';
}

function handleRuleText(prev, curr) {
  if (curr.endsWith('disabled')) {
    return `${prev}${curr}\n\n`;
  }
  return `${prev}${curr}\n\n\`\`\`ts\n// Incorrect\n\n// Correct\n\`\`\`\n\n`;
}
