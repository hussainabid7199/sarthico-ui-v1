import { createContext } from 'react';
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';

export const NavigationContext = createContext<NavigationContainerRef<ParamListBase> | null>(null);
