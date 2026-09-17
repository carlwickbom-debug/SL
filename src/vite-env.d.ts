/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_TRAFIKLAB_GTFS_RT_KEY?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
