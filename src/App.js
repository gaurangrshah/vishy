import React from 'react';
import './App.css';
import Twrap from "./components/utils/Twrap/Twrap"
import Counter from './components/tutorials/Counter/Counter';
/* covers setState method in detail */
import { ClickEvents } from './components/tutorials/ClickEvents/ClickEvents'
/* covers event handling for functional & class components */
import { EventBind } from './components/tutorials/EventBind/EventBind';
import { ParentComponent } from './components/tutorials/MethodProps/MethodProps';
import LocalStorageState from './components/tutorials/LocalStorageTrial/LocalStorageTrial';
import ConditionalRendering from './components/tutorials/ConditionalRendering/ConditionalRendering';
import ListRendering from "./components/tutorials/ListRendering/ListRendering";
import Styling from "./components/tutorials/Styling/Styling";
import FormControl from "./components/tutorials/FormControl/FormControl";
import FormControl2 from "./components/tutorials/FormControl/FormControl2";
import Lifecycles from "./components/tutorials/Lifecycles/Lifecycles";
import ParentComp from "./components/tutorials/PureComponent/ParentComponent";
import RefsDemo from "./components/tutorials/Refs/ClassRefs/RefsDemo";
import FocusInput from './components/tutorials/Refs/ClassRefs/FocusInput';
import FRParent from './components/tutorials/Refs/ForwardRefs/FRParent';
import Portals from './components/tutorials/Portals/Portals';
import KeyedRefs from './components/tutorials/Refs/KeyedRefs/KeyedRef';
import ErrorHandling from './components/tutorials/ErrorHandlinPhases/ErrorHandling';
import ClickCounter from './components/tutorials/HOC/ClickCounter';
import RenderPropsRender from './components/tutorials/RenderProps/RenderPropsRender';
import MDViewer from './components/tutorials/MarkdownPrvw/MDViewer';
import UserApp from './components/tutorials/Context/UserApp';
import Getter from './components/tutorials/HTTP/Getter';
import Poster from './components/tutorials/HTTP/Poster';
import HeaderPortal from './components/Portals/Header/HeaderPortal';
import { NameForm } from './components/PlugForm/useForm';
import { LocalNameForm } from './components/PlugForm/useFormLocalState';
import GetResLinks from './components/Portals/Header/LinksComponent/GetResLinks';
import { StdModal } from './components/Portals/Modal/StdModal';
import ClassCounter from './components/tutorials/HooksSeries/ClassCounterEx'
import FuncCounter from './components/tutorials/HooksSeries/FuncCounterEx'
import FuncCounterWPrevState from './components/tutorials/HooksSeries/FuncCounterWPrevState'
import ObjCounter from './components/tutorials/HooksSeries/ObjCounter'
import ArrCounter from './components/tutorials/HooksSeries/ArrCounter'
import ClassCounterFinal from './components/tutorials/HooksSeries/ClassCounterFinal'
import HookCounterFinal from './components/tutorials/HooksSeries/HookCounterFinal'



function App() {
  return (
    <div className="App">

      <HeaderPortal />
      <header className="App-header">

        <StdModal buttonLabel="Open Me" modalTitle="Name-Form-PopupEx" children={<GetResLinks />} />

      </header>
      <StdModal buttonLabel="Open Me" modalTitle="ArrCounterEx" children={<ArrCounter />} />
      <StdModal buttonLabel="Open Me" modalTitle="HookCounterFinal" children={<HookCounterFinal />} />
      <StdModal buttonLabel="Open Me" modalTitle="ClassCounterFinal" children={<ClassCounterFinal />} />
      <StdModal buttonLabel="Open Me" modalTitle="ObjCounterEx" children={<ObjCounter />} />
      <StdModal buttonLabel="Open Me" modalTitle="ClassCounter & Functional Counter" children={<><ClassCounter /> <FuncCounter /><FuncCounterWPrevState /><ObjCounter /></>} />
      <LocalNameForm />
      <Twrap
        title="useForm-duped"
      >
        <NameForm />
      </Twrap>

      <Twrap
        title="useForm--working"
      >
        <NameForm />
        {/* using nameForm in stdModal, removed wrapping from within */}
      </Twrap>
      <Poster />
      <Getter />
      <UserApp />
      <RenderPropsRender />
      <Portals />
      <ClickCounter name="this guy" />
      <ErrorHandling />
      <MDViewer />


      <Twrap
        title="all previous"
      >
        <KeyedRefs />
        <FRParent />
        <FocusInput />
        <RefsDemo />
        <ParentComp />
        <Lifecycles />
        <FormControl2 />
        <FormControl />
        <Styling primary={true} />
        <ListRendering />
        <ConditionalRendering />
        <LocalStorageState />
        <ParentComponent />
        <EventBind />
        <ClickEvents />
        <Counter />
      </Twrap>

    </div >
  );
}

export default App;
