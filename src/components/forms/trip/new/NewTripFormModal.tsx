import { useState } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import FormProgressHeader from "./FormProgressHeader";
import DateForm from "./DateForm";
import ClassifyForm from "./ClassifyForm";
import MilesForm from "./MilesForm";
import ConfirmForm from "./ConfirmForm";
import { Trip } from "../../../../types";

type PropTypes = {
  newTripFormVisible: boolean;
  setNewTripFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewTripFormModal: React.FC<PropTypes> = ({
  newTripFormVisible,
  setNewTripFormVisible,
}): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [newTrip, setNewTrip] = useState<Trip>({
    date: null,
    formattedDate: null,
    classification: null,
    deductionRate: null,
    miles: 0,
    total: null,
  });

  const goBack = (): void => {
    if (currentStep === 1) {
      setNewTripFormVisible(false);
      return;
    }

    setCurrentStep(currentStep - 1);
  };

  const dismissModal = (): void => {
    setCurrentStep(1);
    setNewTripFormVisible(false);
    setNewTrip({
      date: null,
      formattedDate: null,
      classification: null,
      deductionRate: null,
      miles: 0,
      total: null,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={newTripFormVisible}
        onBackdropPress={dismissModal}
        avoidKeyboard={false}
      >
        <View className={"flex rounded-xl"}>
          <FormProgressHeader currentStep={currentStep} goBack={goBack} />
          <View
            style={{ height: 480 }}
            className={"flex rounded-b-xl bg-white px-4 pb-0"}
          >
            {currentStep === 1 ? (
              <DateForm
                setCurrentStep={setCurrentStep}
                newTrip={newTrip}
                setNewTrip={setNewTrip}
              />
            ) : null}
            {currentStep === 2 ? (
              <ClassifyForm
                setCurrentStep={setCurrentStep}
                newTrip={newTrip}
                setNewTrip={setNewTrip}
              />
            ) : null}
            {currentStep === 3 ? (
              <MilesForm
                setCurrentStep={setCurrentStep}
                newTrip={newTrip}
                setNewTrip={setNewTrip}
              />
            ) : null}
            {currentStep === 4 ? <ConfirmForm
                newTrip={newTrip}
                setNewTrip={setNewTrip}
              /> : null}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewTripFormModal;
