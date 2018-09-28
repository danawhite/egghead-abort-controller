const AbortController = window.AbortController;

export const controller = new AbortController();
export const signal = controller.signal;

// export default { controller, signal };