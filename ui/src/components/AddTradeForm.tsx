import React from "react";
import { LocText } from "./LocText";
import { EJobAdType } from "./Tile";
import { EInputType, Input } from "./Input";
import { TextArea } from "./TextArea";
import { SelectBox } from "./SelectBox";
import { Button } from "./Button";


type AddTradeFormProps = {
  imagePath?: string
  email?: string
  heading?: string
  text?: string
  price?: string
  telephoneNumber?: string
};


export const AddTradeForm: React.FC<AddTradeFormProps> = ({ imagePath="../images/no_image.png", email, heading, text, price, telephoneNumber }: AddTradeFormProps) => <>
  <form>
    <img className="event-picture" src={imagePath} alt="event-picture" />
    <Button
      label={{ en: "Change picture", cz: "Změnit obrázek" }}
    ></Button>
    <Input
      type={EInputType.text}
      label = {{en: "Item name", cz: "Prodávaný předmět"}}
      value={heading}
    ></Input>
    <TextArea
      label = {{en: "Event description", cz: "Popis předmětu"}}
      value={text}
    ></TextArea>
    <Input
      type={EInputType.text}
      label = {{en: "Price", cz: "Cena"}}
      value={price}
    ></Input>
    <Input
      type={EInputType.text}
      label = {{en: "Telephone number", cz: "Telefonní číslo"}}
      value={telephoneNumber}
    ></Input>
    <Input
      type={EInputType.text}
      label = {{en: "E-mail", cz: "E-mail"}}
      value={email}
    ></Input>
  </form>
</>;