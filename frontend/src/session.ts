export function isSessionValid() {
    const sessionid = document.cookie
        .split("; ")
        .find((row) => row.startsWith("sessionid="))
        ?.split("=")[1];

    return !!sessionid
}