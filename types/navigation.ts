import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MiniFigure } from "./miniFigs";
import { DetailsFormModel } from "./detailsForm";

export type RootStackParamList = {
  BeginDrawing: undefined;
  SelectFigure: {
    figures: MiniFigure[];
  };
  DetailsForm: {
    figureId: MiniFigure["set_num"];
  };
  Summary: {
    user: DetailsFormModel;
    figureId: MiniFigure["set_num"];
  };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
