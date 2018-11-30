import OriginalApp from "./OriginalApp"
import {shallow} from 'enzyme'
import React from "react"

it('should render without crashing', () => {
   shallow(<OriginalApp/>)
});
