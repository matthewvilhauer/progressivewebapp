import { ICardSectionStyles } from "@uifabric/react-cards";
import { ICardSectionTokens } from "@uifabric/react-cards";
import { ICardTokens } from "@uifabric/react-cards";
import { Card } from "@uifabric/react-cards";
import { FontWeights } from "@uifabric/styling";
import { Icon, IIconStyles, Image, IStackTokens, ITextStyles, Stack, Text } from "office-ui-fabric-react";
import * as React from "react";
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';
import { loadTheme, getTheme } from "office-ui-fabric-react";

const alertClicked = (): void => {
  alert("Clicked");
};

let customTheme = getTheme();

export default class CardHorizontalExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const cardTextStyles: ITextStyles = {
      root: {
        color: customTheme.palette.themeDark,
        fontWeight: FontWeights.semibold,
      },
    };
    const cardDescriptionTextStyles: ITextStyles = {
      root: {
        fontWeight: FontWeights.regular,
      },
    };
    const cardHelpfulTextStyles: ITextStyles = {
      root: {
        color: customTheme.palette.themeTertiary,
        fontWeight: FontWeights.regular,
      },
    };
    const cardIconStyles: IIconStyles = {
      root: {
        color: customTheme.palette.themeSecondary,
        fontSize: 16,
        fontWeight: FontWeights.regular,
      },
    };
    const footerCardSectionStyles: ICardSectionStyles = {
      root: {
        borderLeft: "1px solid #F3F2F1",
      },
    };

    const sectionStackTokens: IStackTokens = { childrenGap: 20 };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const footerCardSectionTokens: ICardSectionTokens = { padding: "0px 0px 0px 12px" };

    return (
      <Stack horizontalAlign={"center"} tokens={sectionStackTokens}>
        <Card tokens={cardTokens}>
          <Card.Item align={"center"}>
            <div className={"center headerCard"}>{"Loaded with extra UI Fabric \n development resources"}</div>
          </Card.Item>
        </Card>
        <Card horizontal onClick={alertClicked} tokens={cardTokens}>
          <Card.Item fill>
            <Image src="https://placehold.it/180x135" alt="Placeholder image." />
          </Card.Item>
          <Card.Section>
            <Text variant="small" styles={cardTextStyles}>
              Contoso
            </Text>
            <Text styles={cardDescriptionTextStyles}>Contoso Denver expansion design marketing hero guidelines</Text>
            <Text variant="small" styles={cardHelpfulTextStyles}>
              Is this recommendation helpful?
            </Text>
          </Card.Section>
          <Card.Section styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
            <Icon iconName="RedEye" styles={cardIconStyles} />
            <Icon iconName="SingleBookmark" styles={cardIconStyles} />
            <Stack.Item grow={1}>
              <span />
            </Stack.Item>
            <Icon iconName="MoreVertical" styles={cardIconStyles} />
          </Card.Section>
        </Card>
      </Stack>
    );
  }
}
