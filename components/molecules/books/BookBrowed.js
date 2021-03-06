import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedbackBase,
} from "react-native";
import { Card, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";

import CustomImage from "../../atoms/CustomImage";
import Colors from "../../../constants/Colors";

export default BookBrowed = (props) => {
  const navigator = useNavigation();
  const { id, img, name, borowTime, returnTime, timeRemaining, status } = props;
  const onGoToBookDetails = (title, id) => {
    navigator.navigate("BookDetails", { title: title, id: id });
  };
  return (
    <View>
      <Card style={styles.container}>
        <TouchableOpacity onPress={() => onGoToBookDetails(name, id)}>
          <View style={styles.content}>
            <View>
              <CustomImage img={img} />
            </View>
            <View>
              <View style={styles.title}>
                <Text style={styles.name} numberOfLines={3}>
                  {name}
                </Text>
              </View>
              <Text style={styles.detail}>Ngày mượn: {borowTime}</Text>
              <Text style={styles.detail}>Ngày trả: {returnTime}</Text>
              <Text style={styles.detail}>
                Số ngày còn lại: {timeRemaining} ngày
              </Text>

              <Text style={styles.detail}>Trạng thái: {status}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <Icon name="md-more" style={styles.iconMore}></Icon>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    marginStart: 5,
    fontWeight: "bold",
    flexGrow: 1,
    flex: 1,
  },
  detail: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
    marginStart: 5,
    color: Colors.secondary_dark,
  },
  iconMore: {},
});
