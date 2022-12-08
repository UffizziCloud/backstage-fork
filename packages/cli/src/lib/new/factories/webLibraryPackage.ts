/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import chalk from 'chalk';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { paths } from '../../paths';
import { addCodeownersEntry, getCodeownersFilePath } from '../../codeowners';
import { createFactory, CreateContext } from '../types';
import { Task } from '../../tasks';
import { ownerPrompt, pluginIdPrompt } from './common/prompts';
import { executePluginPackageTemplate } from './common/tasks';

type Options = {
  id: string;
  owner?: string;
  codeOwnersPath?: string;
};

export const webLibraryPackage = createFactory<Options>({
  name: 'web-library',
  description: 'A new web-library package',
  optionsDiscovery: async () => ({
    codeOwnersPath: await getCodeownersFilePath(paths.targetRoot),
  }),
  optionsPrompts: [pluginIdPrompt(), ownerPrompt()],
  async create(options: Options, ctx: CreateContext) {
    const { id } = options;

    const name = ctx.scope ? `@${ctx.scope}/${id}` : `${id}`;
    const extensionName = `${upperFirst(camelCase(id))}Page`;

    Task.log();
    Task.log(`Creating web-library package ${chalk.cyan(name)}`);

    const targetDir = ctx.isMonoRepo
      ? paths.resolveTargetRoot('packages', id)
      : paths.resolveTargetRoot(`${id}`);

    await executePluginPackageTemplate(ctx, {
      targetDir,
      templateName: 'web-library-package',
      values: {
        id,
        name,
        extensionName,
        pluginVar: `${camelCase(id)}Plugin`,
        pluginVersion: ctx.defaultVersion,
        privatePackage: ctx.private,
        npmRegistry: ctx.npmRegistry,
      },
    });

    if (options.owner) {
      await addCodeownersEntry(`/packages/${id}`, options.owner);
    }

    await Task.forCommand('yarn install', { cwd: targetDir, optional: true });
    await Task.forCommand('yarn lint --fix', {
      cwd: targetDir,
      optional: true,
    });
  },
});
