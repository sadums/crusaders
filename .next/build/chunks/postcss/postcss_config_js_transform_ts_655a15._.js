(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/postcss/postcss_config_js_transform_ts_655a15._.js", {

"[project]/postcss.config.js/transform.ts/(CONFIG)/[project]/postcss.config.js (ecmascript) (ecmascript, postcss)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>transform
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/postcss/lib/postcss.mjs (ecmascript, postcss)");
var __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/postcss.config.js (ecmascript, postcss)");
var __TURBOPACK__external__path__ = __turbopack_external_require__("path", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const contextDir = process.cwd();
const toPath = (file)=>{
    const relPath = __TURBOPACK__external__path__["relative"](contextDir, file);
    if (__TURBOPACK__external__path__["isAbsolute"](relPath)) {
        throw new Error(`Cannot depend on path (${file}) outside of root directory (${contextDir})`);
    }
    return __TURBOPACK__external__path__["sep"] !== "/" ? relPath.replaceAll(__TURBOPACK__external__path__["sep"], "/") : relPath;
};
const transform = async (ipc, cssContent, name)=>{
    let config = __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$js__$28$ecmascript$29$__["default"];
    if (typeof config === "function") {
        config = await config({
            env: "development"
        });
    }
    let plugins;
    if (Array.isArray(config.plugins)) {
        plugins = config.plugins.map((plugin)=>{
            if (Array.isArray(plugin)) {
                return plugin;
            } else if (typeof plugin === "string") {
                return [
                    plugin,
                    {}
                ];
            } else {
                return plugin;
            }
        });
    } else if (typeof config.plugins === "object") {
        plugins = Object.entries(config.plugins).filter(([, options])=>options);
    } else {
        plugins = [];
    }
    const loadedPlugins = plugins.map((plugin)=>{
        if (Array.isArray(plugin)) {
            const [arg, options] = plugin;
            let pluginFactory = arg;
            if (typeof pluginFactory === "string") {
                pluginFactory = __turbopack_external_require__(pluginFactory);
            }
            if (pluginFactory.default) {
                pluginFactory = pluginFactory.default;
            }
            return pluginFactory(options);
        }
        return plugin;
    });
    const processor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$28$ecmascript$29$__["default"](loadedPlugins);
    const { css, map, messages } = await processor.process(cssContent, {
        from: name,
        to: name,
        map: {
            inline: false
        }
    });
    const assets = [];
    for (const msg of messages){
        switch(msg.type){
            case "asset":
                assets.push({
                    file: msg.file,
                    content: msg.content,
                    sourceMap: typeof msg.sourceMap === "string" ? msg.sourceMap : JSON.stringify(msg.sourceMap)
                });
                break;
            case "file-dependency":
            case "missing-dependency":
                ipc.send({
                    type: "fileDependency",
                    path: toPath(msg.file)
                });
                break;
            case "build-dependency":
                ipc.send({
                    type: "buildDependency",
                    path: toPath(msg.file)
                });
                break;
            case "dir-dependency":
                ipc.send({
                    type: "dirDependency",
                    path: toPath(msg.dir),
                    glob: msg.glob
                });
                break;
            case "context-dependency":
                ipc.send({
                    type: "dirDependency",
                    path: toPath(msg.file),
                    glob: "**"
                });
                break;
        }
    }
    return {
        css,
        map: JSON.stringify(map),
        assets
    };
};
;

})()),
}]);

//# sourceMappingURL=postcss_config_js_transform_ts_655a15._.js.map