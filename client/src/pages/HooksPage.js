import React, {memo} from "react";
import Component from "../components/component/Component";
import UseMemoHook from "../components/hooks/use-memo/UseMemoHook";

export default memo(() => {
    return (
        <>
            <Component title="UseMemoHook">
                <UseMemoHook/>
            </Component>

            {/*<Component title="UseReducerHook">*/}
            {/*    <UseReducerHook/>*/}
            {/*</Component>*/}

            {/*<Component title="UseRefHook">*/}
            {/*    <UseRefHook/>*/}
            {/*</Component>*/}

            {/*<Component title="memo">*/}
            {/*    <MemoHooks/>*/}
            {/*</Component>*/}

            {/*<Component title="useCallback">*/}
            {/*    <UseCallbackHooks/>*/}
            {/*</Component>*/}

            {/*<Component title="useEffect">*/}
            {/*    <HooksUseEffectFamily/>*/}
            {/*</Component>*/}

            {/*<Component title="useState">*/}
            {/*    <HooksUseStateFamily/>*/}
            {/*    <HooksUseStateCounter/>*/}
            {/*</Component>*/}

            {/*<Component title="Posts and Todos">*/}
            {/*    <HooksPostsAndTodos/>*/}
            {/*</Component>*/}
        </>
    );
});

