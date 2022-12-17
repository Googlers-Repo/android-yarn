/* @flow */

import ROOT_USER from './root-user.js';

const path = require('path');

export const home = require('os').homedir();

export const user = process.env.USER

const userHomeDir = path.resolve(home);

export default userHomeDir;
