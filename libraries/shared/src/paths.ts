const BaseDirectory = 'revenge'

export const SettingsFilePath = `${BaseDirectory}/settings.json`

export const TrustedKeysDirectoryPath = `${BaseDirectory}/trusted_keys`
export const TrustedKeysDataFilePath = `${TrustedKeysDirectoryPath}/data.json`

export const PluginsDirectoryPath = `${BaseDirectory}/plugins`
export const PluginsStatesFilePath = `${PluginsDirectoryPath}/states.json`
export const ExternalPluginsMetadataFilePath = `${PluginsDirectoryPath}/externals.json`

export const PluginDirectoryPath = (id: string) => `${PluginsDirectoryPath}/${id}`
export const ExternalPluginManifestFilePath = (id: string) => `${PluginDirectoryPath(id)}/manifest.json`
export const ExternalPluginSourceFilePath = (id: string) => `${PluginDirectoryPath(id)}/source.zip`
export const PluginStoragePath = (id: string) => `${PluginDirectoryPath(id)}/storage.json`
