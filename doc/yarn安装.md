
yarn install用于安装项目的所有依赖项。

使用--save or --save-dev

这些已被yarn add和取代yarn add --dev

yarn install

package.json安装本地 node_modules文件夹中列出的所有依赖项。

该yarn.lock文件的使用方式如下：

如果yarn.lock存在并且足以满足 中列出的所有依赖项，则安装中package.json记录的确切版本，并且将保持不变。Yarn 不会检查更新的版本。yarn.lockyarn.lock

如果不存在，yarn.lock或者不足以满足. 结果写入.package.jsonpackage.jsonpackage.jsonyarn.lock

如果要确保yarn.lock不更新，请使用--frozen-lockfile.

yarn install --check-files

验证已安装的文件node_modules没有被删除。

yarn install --flat

安装所有依赖项，但每个包只允许一个版本。在第一次运行时，这将提示您为在多个版本范围内依赖的每个包选择一个版本。这些将添加到您package.json的 resolutions字段下。

	"resolutions": {
	  "package-a": "2.0.0",
	  "package-b": "5.0.0",
	  "package-c": "1.5.2"
	}

yarn install --force

这将重新获取所有包，甚至是以前安装的包。

yarn install --no-bin-links
防止 yarn 为包可能包含的任何二进制文件创建符号链接。

yarn install --link-duplicates
创建指向 node_modules 中重复模块的硬链接。

yarn install --verbose
安装依赖项时显示其他日志

yarn install --ignore-scripts
不要执行项目 package.json 及其依赖项中定义的任何脚本。

yarn install --modules-folder <path>
指定node_modules目录的替代位置，而不是默认的./node_modules.

yarn install --no-lockfile
不要读取或生成yarn.lock锁定文件。

yarn install --production[=true|false]
devDependencies如果NODE_ENV环境变量设置为.yarn 将不会安装列出的任何包production。使用此标志指示 Yarn 忽略NODE_ENV并取而代之从此标志获取其生产或不生产状态。

注： --production同--production=true。--prod是 的别名--production。

yarn install --pure-lockfile
不要生成yarn.lock锁定文件。

yarn install --focus
Shallowly 在其node_modules文件夹下安装包的同级工作区依赖项。这允许您运行该工作区，而无需构建它所依赖的其他工作区。

必须在工作空间项目的单个工作空间内运行。不能在非工作区项目或工作区项目的根目录中运行。

了解有关重点工作区的更多信息。

yarn install --frozen-lockfile
yarn.lock如果需要更新，请不要生成锁定文件并失败。

yarn install --silent
运行 yarn install 而不打印安装日志。

yarn install --ignore-engines
忽略引擎检查。

yarn install --ignore-optional
不要安装可选的依赖项。

yarn install --offline
在离线模式下运行 yarn install。

yarn install --non-interactive
禁用交互式提示，例如当依赖项的版本无效时。

yarn install --update-checksums
yarn.lock如果锁文件中的校验和与其包的校验和不匹配，请更新它们。

