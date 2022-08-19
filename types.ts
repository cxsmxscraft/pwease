/**
 * Source for types:
 * https://launchermeta.mojang.com/mc/game/version_manifest.json
 */

export interface Latest {
  release: string;
  snapshot: string;
}

export interface Version {
  id: string
  type: string
  url: string
  time: string
  releaseTime: string
}

export interface Data {
  latest: Latest,
  versions: Version[]
}

/**
 * Source for types:
 * https://piston-meta.mojang.com/v1/packages/[uuid]/[version].json
 */

export interface AssetIndex {
  id: string
  sha1: string
  size: number
  totalSize: number
  url: string
}

export interface JavaVersion {
  component: string
  majorVersion: number
}

export interface Download {
  sha1: string
  size: number
  url: string
}

export interface Downloads {
  client: Download
  client_mappings: Download
  server: Download
  server_mappings: Download
}

export interface Asset {
  arguments: unknown,
  assetIndex: AssetIndex
  assets: string
  complianceLevel: number
  downloads: Downloads
  id: string
  javaVersion: JavaVersion
  libraries: unknown
  logging: unknown
  mainClass: string
  minimumLauncherVersion: number
  releaseTime: string
  time: string
  type: string
}
