import type {
  AccordionDef,
  AccordionContentDef,
  AccordionItemDef,
  AccordionTriggerDef,
} from './components/Accordion';
import type {
  AlertDef,
  AlertActionsDef,
  AlertButtonDef,
  AlertDescriptionDef,
  AlertTitleDef,
} from './components/Alert';
import type {
  AlertDialogDef,
  AlertDialogActionDef,
  AlertDialogCancelDef,
  AlertDialogContentDef,
  AlertDialogDescriptionDef,
  AlertDialogFooterDef,
  AlertDialogHeadingDef,
  AlertDialogTriggerDef,
} from './components/AlertDialog';
import type { AspectRatioDef } from './components/AspectRatio';
import type { AvatarDef, AvatarGeneratedDef } from './components/Avatar';
import type { BadgeDef } from './components/Badge';
import type {
  BoxDef,
  FlexDef,
  BoxCenteredDef,
  StackDef,
  ContainerDef,
} from './components/Box';
import type { ButtonDef } from './components/Button';
import type { ButtonGroupDef } from './components/ButtonGroup';
import type { ButtonLinkDef } from './components/ButtonLink';
import type {
  CardDef,
  CardBodyDef,
  CardFooterDef,
  CardHeaderDef,
} from './components/Card';
import type { CardListDef, CardListItemDef } from './components/CardList';
import type { CheckboxDef } from './components/Checkbox';
import type { ContentLoaderDef } from './components/ContentLoader';
import type { CopyableDef } from './components/Copyable';
import type {
  DialogDef,
  DialogContentDef,
  DialogTriggerDef,
  DialogHeadingDef,
  DialogDescriptionDef,
  DialogFooterDef,
  DialogCloseDef,
} from './components/Dialog';
import type {
  DrawerDef,
  DrawerBodyDef,
  DrawerCloseDef,
  DrawerContentDef,
  DrawerTriggerDef,
} from './components/Drawer';
import type {
  DropdownDef,
  DropdownTriggerDef,
  DropdownMenuDef,
  DropdownMenuItemDef,
} from './components/Dropdown';
import type { HeadingDef } from './components/Heading';
import type { HelperIconDef } from './components/HelperIcon';
import type { IconDef } from './components/Icon';
import type { ImageDef } from './components/Image';
import type { LinkDef } from './components/Link';
import type { SpinnerDef } from './components/Spinner';
import type { TextDef } from './components/Text';

export enum Components {
  Accordion = 'Accordion',
  AccordionContent = 'AccordionContent',
  AccordionItem = 'AccordionItem',
  AccordionTrigger = 'AccordionTrigger',
  Alert = 'Alert',
  AlertActions = 'AlertActions',
  AlertButton = 'AlertButton',
  AlertDescription = 'AlertDescription',
  AlertTitle = 'AlertTitle',
  Badge = 'Badge',
  AspectRatio = 'AspectRatio',
  AlertDialog = 'AlertDialog',
  AlertDialogAction = 'AlertDialogAction',
  AlertDialogCancel = 'AlertDialogCancel',
  AlertDialogContent = 'AlertDialogContent',
  AlertDialogDescription = 'AlertDialogDescription',
  AlertDialogFooter = 'AlertDialogFooter',
  AlertDialogHeading = 'AlertDialogHeading',
  AlertDialogTrigger = 'AlertDialogTrigger',
  Button = 'Button',
  Box = 'Box',
  Flex = 'Flex',
  BoxCentered = 'BoxCentered',
  Stack = 'Stack',
  Container = 'Container',
  Avatar = 'Avatar',
  AvatarGenerated = 'AvatarGenerated',
  ButtonGroup = 'ButtonGroup',
  ButtonLink = 'ButtonLink',
  Card = 'Card',
  CardBody = 'CardBody',
  CardFooter = 'CardFooter',
  CardHeader = 'CardHeader',
  CardList = 'CardList',
  CardListItem = 'CardListItem',
  Checkbox = 'Checkbox',
  ContentLoader = 'ContentLoader',
  Copyable = 'Copyable',
  Dialog = 'Dialog',
  DialogContent = 'DialogContent',
  DialogTrigger = 'DialogTrigger',
  DialogHeading = 'DialogHeading',
  DialogDescription = 'DialogDescription',
  DialogFooter = 'DialogFooter',
  DialogClose = 'DialogClose',
  Drawer = 'Drawer',
  DrawerBody = 'DrawerBody',
  DrawerClose = 'DrawerClose',
  DrawerContent = 'DrawerContent',
  DrawerTrigger = 'DrawerTrigger',
  Dropdown = 'Dropdown',
  DropdownTrigger = 'DropdownTrigger',
  DropdownMenu = 'DropdownMenu',
  DropdownMenuItem = 'DropdownMenuItem',
  Heading = 'Heading',
  HelperIcon = 'HelperIcon',
  Icon = 'Icon',
  Image = 'Image',
  Link = 'Link',
  Spinner = 'Spinner',
  Text = 'Text',
}

export type StoreDefs = {
  Accordion: AccordionDef;
  AccordionContent: AccordionContentDef;
  AccordionItem: AccordionItemDef;
  AccordionTrigger: AccordionTriggerDef;
  Alert: AlertDef;
  AlertActions: AlertActionsDef;
  AlertButton: AlertButtonDef;
  AlertDescription: AlertDescriptionDef;
  AlertTitle: AlertTitleDef;
  Badge: BadgeDef;
  AspectRatio: AspectRatioDef;
  AlertDialog: AlertDialogDef;
  AlertDialogAction: AlertDialogActionDef;
  AlertDialogCancel: AlertDialogCancelDef;
  AlertDialogContent: AlertDialogContentDef;
  AlertDialogDescription: AlertDialogDescriptionDef;
  AlertDialogFooter: AlertDialogFooterDef;
  AlertDialogHeading: AlertDialogHeadingDef;
  AlertDialogTrigger: AlertDialogTriggerDef;
  Button: ButtonDef;
  Box: BoxDef;
  Flex: FlexDef;
  BoxCentered: BoxCenteredDef;
  Stack: StackDef;
  Container: ContainerDef;
  Avatar: AvatarDef;
  AvatarGenerated: AvatarGeneratedDef;
  ButtonGroup: ButtonGroupDef;
  ButtonLink: ButtonLinkDef;
  Card: CardDef;
  CardBody: CardBodyDef;
  CardFooter: CardFooterDef;
  CardHeader: CardHeaderDef;
  CardList: CardListDef;
  CardListItem: CardListItemDef;
  Checkbox: CheckboxDef;
  ContentLoader: ContentLoaderDef;
  Copyable: CopyableDef;
  Dialog: DialogDef;
  DialogContent: DialogContentDef;
  DialogTrigger: DialogTriggerDef;
  DialogHeading: DialogHeadingDef;
  DialogDescription: DialogDescriptionDef;
  DialogFooter: DialogFooterDef;
  DialogClose: DialogCloseDef;
  Drawer: DrawerDef;
  DrawerBody: DrawerBodyDef;
  DrawerClose: DrawerCloseDef;
  DrawerContent: DrawerContentDef;
  DrawerTrigger: DrawerTriggerDef;
  Dropdown: DropdownDef;
  DropdownTrigger: DropdownTriggerDef;
  DropdownMenu: DropdownMenuDef;
  DropdownMenuItem: DropdownMenuItemDef;
  Heading: HeadingDef;
  HelperIcon: HelperIconDef;
  Icon: IconDef;
  Image: ImageDef;
  Link: LinkDef;
  Spinner: SpinnerDef;
  Text: TextDef;
};
