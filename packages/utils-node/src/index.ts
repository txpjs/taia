import chalk from '../compiled/chalk';
import fsExtra from '../compiled/fs-extra';
import lodash from '../compiled/lodash';
import crossSpawn from '../compiled/cross-spawn';
import inquirer from '../compiled/inquirer';
import Mustache from '../compiled/mustache';
import axios from '../compiled/axios';
import fetch from '../compiled/node-fetch';
import yParser from '../compiled/yargs-parser';
import semver from '../compiled/semver';
import * as logger from './logger';
export * from './isLocalDev';

export {
  /** only node */
  crossSpawn,
  semver,
  Mustache,
  chalk,
  inquirer,
  fsExtra,
  logger,
  yParser,
  fetch,
  /** all */
  axios,
  lodash,
};
