// export default function useState(initialState) {
//     let hook;
  
//     if (isMount) {
//       hook = {
//         queue: {
//           pending: null
//         },
//         memoizedState: initialState,
//         next: null
//       }
//       if (!fiber.memoizedState) {
//         fiber.memoizedState = hook;
//       } else {
//         workInProgressHook.next = hook;
//       }
//       workInProgressHook = hook;
//     } else {
//       hook = workInProgressHook;
//       workInProgressHook = workInProgressHook.next;
//     }
  
//     let baseState = hook.memoizedState;
//     if (hook.queue.pending) {
//       let firstUpdate = hook.queue.pending.next;
  
//       do {
//         const action = firstUpdate.action;
//         baseState = action(baseState);
//         firstUpdate = firstUpdate.next;
//       } while (firstUpdate !== hook.queue.pending.next)
  
//       hook.queue.pending = null;
//     }
//     hook.memoizedState = baseState;
  
//     return [baseState, dispatchAction.bind(null, hook.queue)];
//   }