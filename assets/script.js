(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const jsBase64 = searchParams.get("js");
    const js = atob(jsBase64);
    let fn = null;
    try {
        fn = new Function(js);
    } catch (error) {
        console.error("Could not create function:", error);
    }
    if (fn) fn();
})();
