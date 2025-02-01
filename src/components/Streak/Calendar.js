import moment from "moment";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import StreakIcon from "../../../assets/Date.png";

export default function Calendar() {
  const streakDays = [
    moment().subtract(1, "days").format("YYYY-MM-DD"),
    moment().subtract(2, "days").format("YYYY-MM-DD"),
    moment().subtract(3, "days").format("YYYY-MM-DD"),
    moment().subtract(4, "days").format("YYYY-MM-DD"),
    moment().subtract(5, "days").format("YYYY-MM-DD"),
  ];
  const startOfWeek = moment().startOf("week");
  const lastDayNextWeek = moment().add(1, "week").endOf("week");

  const week1 = [];
  const week2 = [];

  let currentDay = startOfWeek.clone();
  while (
    currentDay.isBefore(lastDayNextWeek) ||
    currentDay.isSame(lastDayNextWeek)
  ) {
    const formattedDate = currentDay.format("D");

    if (currentDay.isBefore(moment().add(1, "week").startOf("week"))) {
      week1.push({
        formattedDate,
        isStreak: streakDays.includes(currentDay.format("YYYY-MM-DD")),
      });
    } else {
      week2.push({
        formattedDate,
        isStreak: streakDays.includes(currentDay.format("YYYY-MM-DD")),
      });
    }

    currentDay.add(1, "days");
  }

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.row}>
        <Text style={styles.day}>S</Text>
        <Text style={styles.day}>M</Text>
        <Text style={styles.day}>T</Text>
        <Text style={styles.day}>W</Text>
        <Text style={styles.day}>T</Text>
        <Text style={styles.day}>F</Text>
        <Text style={styles.day}>S</Text>
      </View>
      <View style={styles.row}>
        {week1.map((day) => (
          <View style={styles.week} key={day.formattedDate}>
            {day.isStreak ? (
              <Image style={{ width: 28, height: 28 }} source={StreakIcon} />
            ) : (
              <View
                style={
                  day.formattedDate === moment().format("D") && styles.today
                }
              >
                <Text
                  style={[
                    styles.dayText,
                    day.formattedDate === moment().format("D") && {
                      color: "white",
                    },
                  ]}
                >
                  {day.formattedDate}
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>
      <View style={styles.row}>
        {week2.map((day) => (
          <View style={styles.week} key={day.formattedDate}>
            {day.isStreak ? (
              <Image style={{ width: 28, height: 28 }} source={StreakIcon} />
            ) : (
              <Text style={styles.dayText}>{day.formattedDate}</Text>
            )}
          </View>
        ))}
      </View>
      <View style={styles.badge}>
        <Image
          style={{ width: 28, height: 28, marginEnd: 8 }}
          source={StreakIcon}
        />
        <Text style={{ color: "white" }}>10-day streak achiever</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: "#141414",
    padding: 10,
    borderRadius: 15,
    borderColor: "#262626",
    borderStyle: "solid",
    borderWidth: 1,
    marginHorizontal: 20,
    paddingBottom: 40,
  },
  today: {
    backgroundColor: "#141414",
    borderRadius: 15,
    borderColor: "#262626",
    borderStyle: "solid",
    borderWidth: 1,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  dayText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    color: "#3A3A3A",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  day: {
    width: "14%",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    color: "#989898",
  },
  week: {
    width: "14%",
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#44290A",
    alignSelf: "center",
    position: "absolute",
    top: "130%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 16,
  },
});
