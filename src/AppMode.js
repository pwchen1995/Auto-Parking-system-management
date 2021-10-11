/* AppMode: The enumerated type for AppMode. */

const AppMode = {
    LOGIN: "LoginMode",
    RESERVATIONS: "ReservationsMode",
    RESERVATIONS_LOGRESERVATION: "ReservationsMode-LogReservation",
    RESERVATIONS_EDITRESERVATION: "ReservationsMode-EditReservation",
    MAINPAGE: "MainPage",
    INFOPAGE: "InfoPage"
};

Object.freeze(AppMode); //This ensures that the object is immutable.

export default AppMode;