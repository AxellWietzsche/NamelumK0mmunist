FROM gradle:8.6.0-jdk17 AS build
WORKDIR /app
COPY . .
RUN gradle jar --no-daemon

FROM eclipse-temurin:17-jre-jammy
COPY --from=build /app/build/libs/secret-hitler-online.jar /secret-hitler-online.jar
CMD ["java", "-jar", "/secret-hitler-online.jar"]