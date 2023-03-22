/// <reference types="@fuel-stitches/react" />

import type {
  AccordionContentDef,
  AccordionDef,
  AccordionItemDef,
  AccordionTriggerDef,
} from './components/Accordion/types';
import type { ButtonDef } from './components/Button/types';

export enum Components {
  Accordion = 'Accordion',
  AccordionContent = 'AccordionContent',
  AccordionItem = 'AccordionItem',
  AccordionTrigger = 'AccordionTrigger',
  Alert = 'Alert',
  AlertDialog = 'AlertDialog',
  AspectRatio = 'AspectRatio',
  Avatar = 'Avatar',
  Badge = 'Badge',
  Box = 'Box',
  BoxCentered = 'BoxCentered',
  Button = 'Button',
  ButtonGroup = 'ButtonGroup',
  ButtonLink = 'ButtonLink',
  Card = 'Card',
  CardList = 'CardList',
  Checkbox = 'Checkbox',
  Container = 'Container',
  ContentLoader = 'ContentLoader',
  Copyable = 'Copyable',
  Dialog = 'Dialog',
  Drawer = 'Drawer',
  Dropdown = 'Dropdown',
  Flex = 'Flex',
  Focus = 'Focus',
  Form = 'Form',
  FuelLogo = 'FuelLogo',
  Grid = 'Grid',
  Heading = 'Heading',
  HelperIcon = 'HelperIcon',
  Icon = 'Icon',
  IconButton = 'IconButton',
  Image = 'Image',
  Input = 'Input',
  InputAmount = 'InputAmount',
  InputPassword = 'InputPassword',
  Link = 'Link',
  List = 'List',
  Menu = 'Menu',
  Pagination = 'Pagination',
  PasswordStrength = 'PasswordStrength',
  Popover = 'Popover',
  RadioGroup = 'RadioGroup',
  Spinner = 'Spinner',
  Stack = 'Stack',
  Switch = 'Switch',
  Tabs = 'Tabs',
  Tag = 'Tag',
  Text = 'Text',
  ThemeProvider = 'ThemeProvider',
  Toast = 'Toast',
  Tooltip = 'Tooltip',
}

export type StoreDefs = {
  Accordion: AccordionDef;
  AccordionContent: AccordionContentDef;
  AccordionItem: AccordionItemDef;
  AccordionTrigger: AccordionTriggerDef;
  Button: ButtonDef;
};
