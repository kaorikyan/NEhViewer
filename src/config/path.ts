import envPaths from "env-paths";

const paths = envPaths('NEhViewer');

export default {
    data: paths.data,
    config: paths.config,
    temp: paths.temp,
    log: paths.log,
    cache: paths.cache,
}