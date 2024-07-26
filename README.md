Documentation about the solution and decisions

`AgendaView` is a functional component that fetches and displays a list of time slots for a specific week.

The `useState` hook is used to manage the state of the `weeklySlots` array and the `isLoading` boolean. The `useCallback` hook is used to create a memoized version of the `fetchSlots` function, which fetches the time slots for a specific week. The `useEffect` hook is used to fetch the initial time slots when the component mounts.

The `fetchSlots` function uses the `getWeeklySlots` the function makes a GET request to the API endpoint https://draliatest.azurewebsites.net/api/availability/yyyyMMdd using the axios library. The response data is then extracted from the items object using items.data.
`sortWeeklySlots` functions from the `helpers` module to fetch and sort the time slots for a specific week. The sorted time slots are then stored in the `weeklySlots` state.

`onPressNextWeek` and `onPressPrevWeek`, which update the `mondayRef` state to point to the next or previous week, respectively, and then fetch the time slots for that week.

The `handleSlotPress` function is used to handle the press event on a time slot. When a time slot is pressed, it navigates to the `SCREEN.BOOKING` screen, passing the selected time slot as a parameter.

`DateHeader` component, which allows the user to navigate to the previous or next week, and a `SectionList` component, which displays the time slots for the current week. The `SectionList` component uses the `weeklySlots` state as its data source and renders each time slot.

The `SectionList` ( a performant interface for rendering sectioned lists ) component also includes a `renderSectionHeader` function, which is used to render a `SectionHeader` component for each section of the `SectionList`. The `SectionHeader` component displays the title of the section, which is the day of the week.

`SectionList` is like FlatList, but they can have section headers to separate groups of rows. `SectionList` s render each item in their input sections using the renderSectionHeader and renderItem prop.

Overall, the `AgendaView` component provides a user interface for displaying and navigating through a list of time slots for a specific week.

`LoadingDots` component represents a loading indicator composed of three animated dots.
It uses Reanimated library to animate the size of the dots in a repeating sequence.
react-native-reanimated provides an API that greatly simplifies the process of creating smooth, powerful, and maintainable animations

The `Booking` component is defined as a functional component (FC) displays the details of a booked slot and provides a button to book the slot. Inside the component, it uses React's `useState` hook to manage the state of fromData and toData. These states store the formatted start and end times of the booking slot.

The `useLayoutEffect` hook is used to update the fromData and toData states whenever the slot prop changes. The `formatDatetime` function from the ../../helpers module is used to format the start and end times of the slot.

`useLayoutEffect` runs synchronously immediately after React has performed all DOM mutations

The `moment` library is used in these functions to work with dates and times. It provides a flexible and expressive way to manipulate dates and times in JavaScript. The 'moment' library allows you to create, manipulate, and format dates and times in a user-friendly manner. It also supports various date and time formats, time zones, and calendar systems. In the provided code, the 'moment' library is used to extract time, format dates, and perform various date-related operations.

The `useRef` Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

`React Navigation` provides a straightforward navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both Android and iOS

`SafeAreaProvider` provides a flexible API for accessing device safe area inset information

`Axios` has many features that make it easy and convenient to use, automatically converts the data to and from JSON, so you don't have to manually parse or stringify it.

`TouchableOpacity` provides a simple opacity animation that gives users visual feedback by changing the opacity value of the component when pressed

All functions from the `helpers` convert date or get the date use `moment` library
