import React from 'react';
import { container } from '../config/ioc';

const DependencyContext = React.createContext(container);
export default DependencyContext;
