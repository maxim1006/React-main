import React, {Component} from 'react';
import './App.scss';
// просто для примера инжекчу доки
import './store/example-from-docs';
import JSXExampleComponent from "./components/jsx/JsxExamples";
import {CommentListComponent} from "./components/comment/CommentList";
import {ClassBasedComponent} from "./components/class-based/ClassBased";
import {LifecycleHooksComponent} from "./components/lifecycle-hooks/LifecycleHooks";
import {TabsComponent} from "./components/tabs/Tabs";
import JsxFragment from "./components/jsx/JsxFragment";
import {FormsComponent} from "./components/forms/Forms";
import {RestApiComponent} from "./components/rest-api/RestApi";
import GridComponent from "./components/grid/Grid";
import {ReduxComponent} from "./store/Redux";
import {JsxListComponent} from "./components/jsx/JsxList";
import {Parent} from "./components/parent/Parent";

class App extends Component {

    render() {
        return (
            <div className="app">
                <main className="app__main">
                    <TabsComponent>
                        <div tabName="Redux">
                            <ReduxComponent/>
                        </div>
                        <div tabName="Components">
                            <Parent/>

                            <GridComponent/>

                            <RestApiComponent/>

                            <LifecycleHooksComponent/>

                            <ClassBasedComponent/>

                            <CommentListComponent/>
                        </div>
                        <div tabName="Forms">
                            <FormsComponent/>
                        </div>
                        <div tabName="JSX">
                            <JsxListComponent/>
                            <JsxFragment
                                prop1="prop1"
                                prop2="prop2"
                            />
                            <JSXExampleComponent/>
                        </div>
                    </TabsComponent>
                </main>
            </div>
        );
    }
}

export default App;
