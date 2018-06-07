import Rect from 'react';
import Aux from '../../hoc/Aux';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, sideDrawer, BAckdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;